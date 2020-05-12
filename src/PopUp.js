import M from 'materialize-css';

const PopUp = {
    exibeMensagem: (status, msg) => {
        // if(status === 'success'){
            // M.toast({html: msg, classes: 'green', displayLenght: 2000});
        // }

        // if(status === 'error'){
            // M.toast({html: msg, classes: 'red', displayLength: 2000});
        // }

        switch (status) {
            case 'success':
                M.toast({html: msg, classes: 'green', displayLength: 2000});
                break;
            case 'error':
                M.toast({html: msg, classes: 'red', displayLength: 2000})
                break;
            default:
                break;
        }
    }
}

export default PopUp;