# -*- coding: utf-8 -*-
"""HW5.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/143ZKERB7n1ceJzDbVxWQQMHo5Zbvh3oL
"""

D ={"さっぽろ":196,"おたる":11,"はこだて":25}

while True:

 City = input("ひらがなで、北海道の市？ （例えば、あさひかわ）:")
 if len(City) == 0:
   break
 Population = int(input("その市の人口は何万人？ （例えば、33）:"))

 if City in D.keys():
  print("既に登録されているので、追加しません\n")
 else:
  print("登録しました")
  D[City] = Population
  X = sorted(D.items(), key=lambda x:x[1], reverse=True)
  print(X,"\n")