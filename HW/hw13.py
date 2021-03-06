# -*- coding: utf-8 -*-
"""HW13.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/14UN9MSFREBEofPwYuLxR0JmbHfenyqu6
"""

from sklearn.datasets import load_iris           
iris = load_iris()                              
X = iris.data[:, :4]                           
y = iris.target                                 
from sklearn.neural_network import MLPClassifier
clf = MLPClassifier(max_iter=10000)               
clf.fit(X, y)                                
clf.score(X, y)                                
print("10000回繰り返した後の予測結果\n",y)
newx = clf.predict(X).tolist()
newy = y.tolist()
print("混同行列と評価結果")
from sklearn.metrics import confusion_matrix
print(confusion_matrix(newx,newy))
from sklearn.metrics import classification_report
print(classification_report(newx,newy))