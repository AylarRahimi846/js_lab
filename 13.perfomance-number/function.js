function perfomancGrade() {
    let grade = Math.floor(Math.random() * 101);
    document.write("perfomance score:" + grade + "");

    if (grade >= 90) {
        document.write("NICE DONE")
        document.body.style.background = "green";
    }
    if (grade >= 60 && grade < 90) {
        document.write("NOT BAD")
        document.body.style.background = "yellow";
    }
    if (grade < 60) {
        document.write("FAILD")
        document.body.style.background = "red";
    }
}