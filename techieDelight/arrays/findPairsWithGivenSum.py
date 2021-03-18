


 
# arr = [8, 7, 2, 5, 3, 1]
# sum = 10
 
# Output:
 
# Pair found at index 0 and 2 (8 + 2)
 
# or
 
# Pair found at index 1 and 4 (7 + 3)


# O(n.log(n)) solution using Sorting –
# Function to find a pair in an array with a given sum using sorting
def findPair(A, sum):
 
    # sort the list in ascending order
    A.sort()
 
    # maintain two indices pointing to endpoints of the list
    (low, high) = (0, len(A) - 1)
 
    # reduce the search space `A[low…high]` at each iteration of the loop
 
    # loop till the search space is exhausted
    while low < high:
 
        if A[low] + A[high] == sum:        # sum found
            print("Pair found")
            return
 
        # increment `low` index if the total is less than the desired sum;
        # decrement `high` index if the total is more than the desired sum
        if A[low] + A[high] < sum:
            low = low + 1
        else:
            high = high - 1
 
    # No pair with the given sum exists
    print("Pair not found")
 
 
if __name__ == '__main__':
 
    A = [8, 7, 2, 5, 3, 1]
    sum = 10
 
    findPair(A, sum)