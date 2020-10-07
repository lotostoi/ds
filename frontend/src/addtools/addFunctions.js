export { getContent }

const getContent = (arr, rout, chengProg) => {

    return new Promise(async (resolve, reject) => {

        for (let i = 0; i <= arr.length + 1; i++) {
            console.log(i)
            let prog = (i * 100) / arr.length;

            if (arr[i]) {
                const el = arr[i];
                let url = rout;
                let formData = new FormData();
                formData.append("file", el);
                try {
                    let response = await fetch(url, {
                        method: "POST",
                        body: formData,
                    });
                    let { text } = await response.json();
                    if (text == "Success") {
                        chengProg( prog)
                    }
                } catch (e) {
                    reject("Error loading file:" + e);
                }
            } else {
                chengProg(prog)
                resolve(console.log('Data loaded'))
            }
        }
    })

}


