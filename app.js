document.getElementById('customerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('customerForm').style.display = 'none';
    document.getElementById('paymentSection').style.display = 'block';
    
    Moyasar.init({
        element: '.mysr-form',
        amount: 45000,
        currency: 'SAR',
        description: 'ساعة فاخرة',
        publishable_api_key: 'pk_test_STo8rhWE9NRD836hnoathSM6S5ufSubvSkJcjLCz',
        methods: ['creditcard', 'applepay']
    }).render();
});
