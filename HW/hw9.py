# -*- coding: utf-8 -*-
"""HW9.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1NjY62_VVDSCVQj5bNF9XJj-KRFTJiuDR
"""

from google.colab import drive
drive.mount('/content/drive')

with open('/content/drive/My Drive/034.txt', 'r') as f:
 data = f.readlines()

print(data)

for l in data:
 print(l)

from google.colab import files
uploaded = files.upload()
for l in uploaded.keys():
 print('アップロードファイル名： "{name}"　　サイズ： {length} bytes'.format(name=fn, length=len(uploaded[fn])))

with open(l,"r") as F:
   for l in F:
     print(l)