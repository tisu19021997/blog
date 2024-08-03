---
tags:
  - on/llm/fine-tune
  - on/science
url: https://www.youtube.com/watch?v=dA-NhCtrrVE
---
> [!Summary]
> Fine-tuning the low-rank decomposed weight matrices instead of huge pre-trained weights. It is possible because they hypothesize that the change in weight during model adaptation/fine-tune has a low intrinsic rank (i.e there are a lots of redundant rows and columns that could be reduced.)

# Abstract
- Compared to GPT-3 175B fine-tuned with Adam: LoRA reduce the number of trainable parameters by 10,000 times and GPU required by **3 times**.
- Tested on RoBERTa, DeBERTa, GPT-2, and GPT-3.
- Provide *no additional inference latency*.
## Key advantages
- Plug and play: suppose you have fine-tuned multiple models with LoRA. The LoRA modules in each model can be switched for different task while keeping the other part of the model unchanged.
- Make training more efficient and lowers the hardware requirements **up to 3 times**.
- No inference latency compared to fine-tuned model: trainable matrices can be merged with frozen weights at inference time.
# Notable points
- Hypothesis that update matrix $\Delta W$ could have a very small "[[science/Intrinsic dimensionality|Intrinsic dim]] rank": may not be applied when fine-tuning on different language (too much to learn)