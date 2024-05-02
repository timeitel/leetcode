package main

import (
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func main() {
	data, err := os.ReadFile("tests.csv")

	if err != nil {
		fmt.Println("Error reading file: ", err)
		return
	}

	lines := strings.Split(string(data), "\n")
	tests := lines[:len(lines)-1]

	for _, test := range tests {
		tests := strings.Split(test, ",")
		input, answerStr := tests[0], tests[1]

		answer, _ := strconv.Atoi(answerStr)

		if result := lengthOfLongestSubstring(input); answer != result {
			log.Fatal("Input of ", input, "lead to result of", result, "!= ", answerStr)
			return
		} else {
			log.Printf("Correct! Input of %s => %d, answer is %d", input, result, answer)
		}
	}
}

func lengthOfLongestSubstring(s string) int {
	window := make(map[string]bool)
	longest := 0
	left := 0

	for right := 0; right < len(s); right++ {
		rightChar := string(s[right])

		if _, ok := window[rightChar]; ok {
			leftChar := string(s[left])

			for leftChar != rightChar {
				delete(window, leftChar)
				left++
				leftChar = string(s[left])
			}

			left++
			continue
		}

		window[rightChar] = true

		if winLen := len(window); winLen > longest {
			longest = winLen
		}
	}

	return longest
}
