document.addEventListener('DOMContentLoaded', function() {
    function loadConsumerBids() {
        // Fetch and display consumer bids
        const consumerBids = [
            { id: 1, bid: "Bid 1 details" },
            { id: 2, bid: "Bid 2 details" }
        ];

        const bidsList = document.getElementById('consumer-bids');
        consumerBids.forEach(bid => {
            const bidItem = document.createElement('div');
            bidItem.className = 'bid-item';
            bidItem.innerText = bid.bid;
            bidsList.appendChild(bidItem);
        });
    }

    loadConsumerBids();
});
