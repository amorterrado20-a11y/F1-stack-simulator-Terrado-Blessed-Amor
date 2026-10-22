
class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
        return element;
    }

    pop() {
        if (this.count === 0) return undefined;

        this.count--;
        const deletedItem = this.items[this.count];
        this.items.pop();
        return deletedItem;
    }

    peek() {
        if (this.count === 0) return undefined;
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    clear() {
        this.items = [];
        this.count = 0;
    }

    print() {
        return this.items.join(" ");
    }
}

const stack = new Stack();

$(document).ready(function () {
    const input = $("input[aria-label='data']");

    function displayStack() {
        $("#stack").empty();

        for (let i = stack.count - 1; i >= 0; i--) {
            const color = i % 2 === 0 ? "bg-primary" : "bg-success";

            $("#stack").append(
                `<div class="row ${color} push">${stack.items[i]}</div>`
            );
        }
    }

    function displayDeleted(value) {
        $(".popped").html("");

        if (value !== undefined) {
            $(".popped").append(
                `<div class="row pop text-bg-danger border border-light">${value}</div>`
            );
        }
    }

    // Initial stack values
    stack.push(100);
    stack.push(200);
    stack.push(300);
    stack.push(400);
    displayStack();

    // PUSH
    $("button").eq(0).on("click", function () {
        const value = input.val().trim();

        if (value === "") {
            alert("Please enter data first.");
            return;
        }

        stack.push(value);
        input.val("");
        displayStack();
    });

    // POP
    $("button").eq(1).on("click", function () {
        const deleted = stack.pop();

        if (deleted === undefined) {
            alert("The stack is empty!");
            return;
        }

        displayDeleted(deleted);
        displayStack();
    });

    // PEEK
    $("button").eq(2).on("click", function () {
        const top = stack.peek();

        if (top === undefined) {
            alert("The stack is empty!");
        } else {
            alert("Top element is: " + top);
        }
    });

    // CLEAR
    $("button").eq(3).on("click", function () {
        stack.clear();
        displayStack();
        displayDeleted(undefined);
    });
});
