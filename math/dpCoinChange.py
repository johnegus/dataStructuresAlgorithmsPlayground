

def change_matrix(coin_set, change_amount):
    matrix = [[0 for m in range(change_amount + 1)] for m in range(len(coin_set) + 1)]
    print(matrix)
    for i in range(change_amount + 1):
        matrix[0][i] = i
    return matrix

def change_making( coins, change):
    matrix = change_matrix(coins, change)

    for c in range(1, len(coins) + 1):
        for r in range(1, change + 1):

            if coins[c-1] == r:
                matrix[c][r] = 1
            
            elif coins[c-1] > r:
                matrix[c][r] = matrix[c-1][r]

            else:
                matrix[c][r] = min(matrix[c-1][r], 1+ matrix[c][r - coins[c -1]])
    return matrix[-1][-1]




coins6 = [186,419,83,408]
amount6 = 6249
print(change_making([1,2,5], 11))