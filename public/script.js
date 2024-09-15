
    // Function to detect and connect to MetaMask
    async function connectMetaMask() {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const account = accounts[0];
                console.log(account);
                const maskicon = `<img src="https://metamask.io/favicon-32x32.png" alt="OpenMask Icon" style="height:20px; width: 20px; margin-right: 8px;">`;
                const button = document.querySelector('.connect-button');
                button.innerHTML = maskicon + `${account.slice(0, 6)}...${account.slice(-4)}`;
                document.querySelector('.swap-button').innerHTML = maskicon + `Metamask connected ` ;
                console.log('Connected MetaMask account:', account);
            } catch (error) {
                console.error('Error connecting to MetaMask:', error);
            }
        } else {
            alert('MetaMask is not installed!');
        }
    }

    // Function to detect and connect to OpenMask (TON wallet)
    async function connectOpenMask() {
        const provider = window.ton;
        if (!provider) {
            alert('OpenMask is not installed!');
            return;
        }
        try {
            const accounts = await provider.send("ton_requestAccounts");
            const account = accounts[0];
            console.log(account);
            // const walletAddressElement = document.getElementById('walletAddress');
            // walletAddressElement.innerText = `TON Address: ${account}`;
            const openicon = `<img src="https://www.openmask.app/tonmask-logo.svg" alt="OpenMask Icon" style="height:20px; width: 20px; margin-right: 8px;">`;
            const button = document.querySelector('.connect-button');
            button.innerHTML = openicon + `${account.slice(0, 6)}...${account.slice(-4)}`;
            document.querySelector('.swap-button').innerHTML = openicon + `OpenMask connected ` ;
            console.log('Connected OpenMask account:', account);
        } catch (error) {
            console.error('Error connecting to OpenMask:', error);
        }
        } 

    // Function to open dialog and choose wallet
    function openWalletDialog() {
        const walletOptions = `
            <div class="coin" onclick="connectMetaMask()">
                <img src="https://metamask.io/favicon-32x32.png" alt="MetaMask" />
                MetaMask (ETH)
            </div>
            <div class="coin" onclick="connectOpenMask()">
                <img src="https://www.openmask.app/tonmask-logo.svg" alt="OpenMask" />
                OpenMask (TON)
            </div>`;
        
        const dialogBox = document.querySelector('.dialog-box');
        dialogBox.innerHTML = walletOptions;
        openDialog();
    }

    // Bind the wallet connection to the button
    document.querySelector('.connect-button').onclick = openWalletDialog;

    // Open/close dialog functions as provided

