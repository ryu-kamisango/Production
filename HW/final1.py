# -*- coding: utf-8 -*-
"""Final1.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1tFiMKiQ9cpHYLggc9q1mk0u6KCgM2FRb
"""

! wget https://www.otaru-uc.ac.jp/hkyomu1/kyomu_site/syllabus2020/01/01_1500330_ja_JP.html

! cat syllabus2020/01/01_1500330_ja_JP.html

import re

with open("01_1500330_ja_JP.html",'r') as F:
 html = F.read()
 
 html = html.replace("\n","")

 html = html.replace("  "," ")

 html = html.replace("<br>","")

 html = re.sub("\s+"," ",html)

htmlLines = html.split("</tr>")
print(htmlLines)

List = {}

for l in htmlLines:

   s = re.search('<tr> <th class="syllabus-prin" width="200">(.+?)</th> <td>(.+?) </td> ',l)
    
   if s:

    List[s.group(1)] = s.group(2)

for k,v in List.items():
 print("key=",k)
 print("value=",v,"\n")