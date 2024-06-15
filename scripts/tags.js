const tags = [
    "Array",
    "Backtracking",
    "Binary Indexed Tree",
    "Binary Search",
    "Bit Manipulation",
    "Breadth-First Search (BFS)",
    "Depth-First Search (DFS)",
    "Divide and Conquer",
    "Dynamic Programming",
    "Graph",
    "Greedy",
    "Hash Table",
    "Heap (Priority Queue)",
    "Linked List",
    "Math",
    "Memoization",
    "Minimum Spanning Tree",
    "Queue",
    "Random",
    "Recursion",
    "Segment Tree",
    "Shortest Path",
    "Sliding Window",
    "Sort",
    "Stack",
    "String",
    "Topological Sort",
    "Tree",
    "Trie",
    "Two Pointers",
    "Union Find"
];

const selectTag = document.getElementById("tag");
tags.forEach(tag => {
    const option = document.createElement("option");
    option.value = tag;
    option.text = tag.charAt(0).toUpperCase() + tag.slice(1);
    option.classList.add("odd:bg-gray-200");
    selectTag.appendChild(option);
});