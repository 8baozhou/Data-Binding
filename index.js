var e = s => document.querySelector(s)

class DataBinding {
    constructor(opts) {
        this.input = opts.input
        this.data = opts.data
        this.span = opts.span
        this.init()
    }
    init() {
        this.bindData()
        this.bindInput()
        this.span.innerText = this.message
    }

    bindInput() {
        // 初始化 input value
        this.input.value = this.message
        // 绑定 input 事件
        this.input.addEventListener('input', event => {
            this.message = event.target.value
        })
    }

    bindData() {
        Object.defineProperty(this, 'message', {
            get() {
                return this.data.message
            },
            set(value) {
                if (value != this.data.message) {
                    this.data.message = value
                    this.span.innerText = value
                }
            }
        })
    }
}


var main = function () {
    new DataBinding({
        input: e('input'),
        span: e('span'),
        data: {
            message: '双向数据绑定'
        }
    })
}

main()