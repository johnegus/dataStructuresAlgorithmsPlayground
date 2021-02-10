
def create_array(size=10, max=50):
    from random import randint
    return [randint(0, max) for i in range(size)]

a = create_array()

def merge(a, b):
    new_array =[]
    a_index, b_index = 0, 0
    while a_index < len(a) and b_index < len(b):
        if a[a_index] < b[b_index]:
            new_array.append(a[a_index])
            a_index += 1
        else:
            new_array.append(b[b_index])
            b_index += 1
    if a_index == len(a): new_array.extend(b[b_index:])
    else: new_array.extend(a[a_index:])
    return new_array

def merge_sort(a):
    if len(a) <= 1: return a
    left,right = merge_sort(a[:len(a)/2]), merge_sort(a[len(a)/2:])
    return merge(left, right)

# a=[1,3,5]
# b=[2,4,6]

# print(merge(a, b))

print(a)
s = merge_sort(a)
print(s)
