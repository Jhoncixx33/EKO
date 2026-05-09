import * as tf from '@tensorflow/tfjs';
import { loadGraphModel } from '@tensorflow/tfjs-converter';

const CLASSES = ['cartón', 'vidrio', 'metal', 'papel', 'plástico', 'basura'];

let model: tf.GraphModel | null = null;

export async function loadModel() {
  model = await loadGraphModel('/models/trashnet/model.json');
}

export async function classifyMaterial(
  imageSrc: string
): Promise<{ label: string; confidence: number }> {
  if (!model) throw new Error('Modelo no cargado');

  const img = new Image();
  img.src = imageSrc;
  await img.decode();
  const tensor = tf.browser.fromPixels(img).resizeNearestNeighbor([224, 224]).toFloat().expandDims();

  const predictions = model.predict(tensor) as tf.Tensor;
  const scores = await predictions.data();
  const maxIdx = scores.indexOf(Math.max(...scores));

  return {
    label: CLASSES[maxIdx],
    confidence: scores[maxIdx],
  };
}
