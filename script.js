function convertFraction() {
    const input = document.getElementById('inputFraction').value;

    if (input) {
        // Split the input into parts by '/'
        const parts = input.split('/');
        
        if (parts.length === 3) {
            // The first digit remains unchanged
            let number = parts[0];
            
            // Add five zeros and replace them with the middle part
            number += '00000'.substring(parts[1].length) + parts[1];
            
            // Add four zeros and replace them with the last part
            number += '0000'.substring(parts[2].length) + parts[2];
            
            // Open the constructed URL in a new tab
            openNewTab(number);
        } else {
            alert('Please enter a valid fraction-like string with three parts.');
        }
    } else {
        alert('Please enter a valid fraction-like string.');
    }
}

function openNewTab(number) {
    const url = `https://a836-pts-access.nyc.gov/care/Datalets/PrintDatalet.aspx?pin=${number}&gsp=PROFILEALL2&taxyear=2025&jur=65&ownseq=0&card=1&roll=RP_NY&State=1&item=1&items=-1&all=all&ranks=Datalet`;
    window.open(url, '_blank');
}
