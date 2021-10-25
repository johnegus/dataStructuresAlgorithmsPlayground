
nums = [2, 7, 11, 15]
target = 9


def twoSum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    nums_dict = dict(zip(nums, target))
    return nums_dict


print(twoSum(nums, target))
