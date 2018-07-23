---
layout: single
title: "Distributed Representations of Sentences and Documents"
date: 2018-07-22 15:53 -0700
categories: "machine learning"
mathjax: true
---

[Paper Link](https://arxiv.org/abs/1405.4053)

## Introduction
- Applications typically require text to be represented as a fixed-length vector. 

- Bag-of-words and bag-of-ngrams have little sense of the semantics. They also lose the meaning in word order.
- Word2vec understands the word semantics better, but word order is still lost when it is applied to paragraphs, whose embedding is computed through an average of the word-embeddings of the words in the paragraph.
- Paragraph Vector is an unsupervised framework to learn a fixed length vector from a variable-length piece of text.

## Algorithm
- The algorithm maintains dictionary from words to word vectors and paragraphs to paragraph vectors.
- The learning problem is similar to continuous bag-of-words. We build a model to predict a word given the word vector of the surrounding words plus the paragraph vector of the paragraph which the words are from. See image below for the model.

![Paragraph Vector Training Model](/assets/img/machine-learning-papers\2018\distributed-representations-of-sentences-and-documents-1.JPG){: .align-center}

- After the model is trained, the paragraph vectors can be used as features for the paragraphs.
- One variation of paragraph vectors (distributed bag-of-words) does not consider word orderings and is similar to the skip-gram model. We build a model to predict a random word in a paragraph by its paragraph vector. See image below for the model.

![Distributed Bag-of-Words Training Model](/assets/img/machine-learning-papers\2018\distributed-representations-of-sentences-and-documents-2.JPG){: .align-center}

## Experiments
- The paper ran experiments on three problems:
  - Sentiment analysis on Stanford sentiment treebank dataset. Single sentence, 5-way classification.
  - Sentiment analysis on IMDB dataset. Multi-sentence, binary classification.
  - Information retrieval. Tries to identify which two out of three paragraphs are from the same query. A better paragraph representation is one that achieves a small distance for pairs of paragraphs of the same query and a large distance for pairs of paragraphs of different queries.
- At training time, paragraph vectors and word vectors are trained from both labeled and unlabeled data (label is not used for learning paragraph vectors!). A sentiment model is then trained with paragraph vectors as features.
- At test time, all training paragraph and word vectors are fixed, and test paragraph vectors are learnt by gradient descent. Once we have the vectors, the test paragraph vectors are feed to the sentiment analysis model to predict the sentiment.