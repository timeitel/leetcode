package main

import (
	"errors"
	"fmt"
)

func main() {
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9))
}

func twoSum(nums []int, target int) ([]int, error) {
	prevNums := make(map[int]int)

	for idx, num := range nums {
		diff := target - num

		if requiredIdx, ok := prevNums[diff]; ok {
			return []int{requiredIdx, idx}, nil
		}

		prevNums[num] = idx
	}

	return []int{}, errors.New("not found")
}
