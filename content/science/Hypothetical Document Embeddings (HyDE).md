---
tags:
  - on/llm/rag
  - on/science
---
2 phases system:
1. Generate a hypothetical answer (from user query):
	- Something like `write a document to answer {user_query}`, utilizing a LLM.
	- The answer may not be **factually accurate**, but it serves as an example of what a relevant document could look like.
2. Encoding and Retrieval:
	- The hypothetical answer is then processed by an **unsupervised contrastive encoder**
	- Retrieve most similar document to the hypothetical answer's embedding.