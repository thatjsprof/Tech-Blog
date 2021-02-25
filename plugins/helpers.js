export default ({ app }, inject) => {
    inject('checkStatus', ( code, isLogin ) => {
        function errorMessage (errorCode) {
            let message
            switch (errorCode) {
                case 400:
                    message = isLogin ? 'User does not exist' : 'Email exists already'
                    break
                case 500:
                    message = 'put error message'
                    break
                case null:
                    message = 'Network Error'
            }
            return message
        }

        let statusCodes = {
            400: errorMessage(400),
            500: errorMessage(500),
            null: errorMessage(null)
        }
    
        if (statusCodes[code]) {
            return statusCodes[code]
        } else {
            return false
        }
    })
}