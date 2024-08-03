---
title: LLM GPU memory calculation
tags:
  - on/llm
url: https://huggingface.co/docs/transformers/perf_train_gpu_one#anatomy-of-models-memory
---
Computation
- In full precision `float32`: every parameter = **32 bits** or **4 bytes**
	- 7B model = 7B * 4 bytes = 28 billion bytes = 28 GB of GPU memory required, for inference.
- In half precision: every parameter = **32/2=16 bits** or **2 bytes**
	- 7B model = 14 GB
- And so on, for 8 bit = 7 GB and 4 bit = 3.5 GB for 7B model

For training, it depends on the optimizer you use.
- In case you use regular AdamW, then you need 8 bytes per parameter (as it not only stores the parameters, but also their gradients and second order gradients). Hence, for a 7B model you would need 8 bytes per parameter * 7 billion parameters = 56 GB of GPU memory. 
- If you use AdaFactor, then you need 4 bytes per parameter, or 28 GB of GPU memory.
	- With the optimizers of bitsandbytes (like 8 bit AdamW), you would need 2 bytes per parameter, or 14 GB of GPU memory.

