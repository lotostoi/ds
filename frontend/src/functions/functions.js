export { getContent, findById }

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
                        changeProg(prog)
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



const findById = (bigObj, id) => {
    let result = null
    const fById = (bigObj, id) => {
        for (let obj in bigObj) {
            if (bigObj[obj] && bigObj[obj].id === id) {
                result = bigObj[obj]
                console.log('tt');
                break
            }
            else if (typeof (bigObj[obj]) === "object") {
                fById(bigObj[obj], id)
                break
            }
        }
    }
    fById(bigObj, id)

    return result
}

