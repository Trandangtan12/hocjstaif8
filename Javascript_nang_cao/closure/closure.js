function creactCounter() {
    let counter = 0

    function increase() {
        return ++counter
    }
    return increase
}

const counter1 = creactCounter() // cái này trả về hàm increase vì nó return ra

console.log(counter1() /*đây là hàm mình dùng dấu ngoặc tròn để gọi hàm increase*/);
console.log(counter1());
console.log(counter1());

function createLogger(namespace) {
    function logger(message){
    console.log(`[${namespace}] ${message}`);
    }
    return logger;
}
const infoLogger = createLogger('info');

infoLogger('Bắt đầu gửi mail');
infoLogger('Gửi mail lỗi lần 1, thử gửi lại ...')

function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {} //Nếu không có thì nó mặc định là rỗng

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }

    const storage = {
        get(key) {
            return store[key]
        },
        set(key, value){
            store[key] = value
            save()
        }, 
        remove(key) {
            delete store[key]
            save()
        }
    }
    return storage
}

//profile.js
const profileSetting = createStorage('profile_setting')

console.log(profileSetting.get('fullname'));
profileSetting.set('fullname', 'tan')
