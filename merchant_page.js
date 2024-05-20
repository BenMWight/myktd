document.addEventListener('DOMContentLoaded', function() {
    function loadOpenBids() {
        // Fetch and display open bids
        const openBids = [
            { id: 1, bid: "Open bid 1 details" },
            { id: 2, bid: "Open bid 2 details" }
        ];

        const bidsList = document.getElementById('open-bids');
        openBids.forEach(bid => {
            const bidItem = document.createElement('div');
            bidItem.className = 'bid-item';
            bidItem.innerText = bid.bid;
            bidsList.appendChild(bidItem);
        });
    }

    loadOpenBids();
});
