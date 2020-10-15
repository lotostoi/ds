export { getContent }

// function for senting to server images which was putted in the  content's window
// callback "changeProg" needs to controll progressbar's value 
// arr - array of files(.jpg,.png .....) 
// rout - path to server

const getContent = (arr, rout, changeProg) => {
    return new Promise(async (resolve, reject) => {
        for (let i = 0; i <= arr.length + 1; i++) {
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
                        chengProg(prog)
                    }
                } catch (e) {
                    reject("Error loading file:" + e);
                }
            } else {
                changeProg(prog)
                resolve(console.log('Data loaded'))
            }
        }
    })
}


