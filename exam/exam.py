data=['helo','welcome','hai']
longest_word=""
max_length=0
for i in data:
    if len(i)>max_length:
        max_length=len(i)
        longest_word=i
print("the longest word is:{longest_word}")


A
B A
C B A

a=65
for i in range(3):
    for j in range(i+1):

data=['helo','welcome','hai']
a=data[0]
for i in data:
    if i<a:
        a=i
print(a)