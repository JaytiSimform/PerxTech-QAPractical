/// <reference types="Cypress" />

describe('Oauth feature apis', () => {
    let access_token = '';
    let userId = ''

    beforeEach('generate token', () => {
        //to get the token id(access token)
        cy.request({
            method: 'POST',
            url: ' https://api.perxtech.io/v4/dash/user_sessions',
            body: {

                // Use , email = reward_admin@dashboard and password : reward_admin to test authorization
                email: 'admin@dashboard.com',
                password: 'admin1234'
            }
        }).then(response => {
            cy.log(JSON.stringify(response));
            cy.log(response.body.bearer_token);
            access_token = response.body.bearer_token;

        })
    })
    // Test API call for Loyalty Module
    it('Check API call for Loyalty List', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.perxtech.io/v4/dash/simple/loyalty',
            headers: {
                'Authorization': 'Bearer ' + access_token
            }
        }).then(response => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(200);
        })
    })

    // Test API call for Add Reward Module
    it('Check API Call for Add Rewards', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.perxtech.io/v4/dash/rewards',
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
            body: {
                "transaction_validity_period_type": "period",
                "transaction_expires_in_units": null,
                "grace_time_in_units": null,
                "transaction_issues_at": "2022-03-31T09:28:59.229Z",
                "transaction_issues_at_time": "",
                "transaction_expires_at": "2023-03-03T00:00:00.000Z",
                "transaction_expires_at_time": "",
                "newReward": true,
                "timezone": "Asia/Kuala_Lumpur",
                "is_private": false,
                "is_system": false,
                "reward_cost_amount": 0,
                "reward_prices": [],
                "reward_publicity_type": "public",
                "campaign_interval_period": "day",
                "account_interval_period": "day",
                "grace_time_in_period": "day",
                "transaction_expires_in_period": "day",
                "code_generation_method": "nocode",
                "voucher_type": "code",
                "user_generated": true,
                "display_even_when_sold_out": true,
                "display_even_when_user_limit_reached": true,
                "random_voucher_code_length": 6,
                "begins_at": "2022-03-31T09:28:59.229Z",
                "redemption_type": "offline",
                "reward_cost_currency": "usd",
                "sneak_peek_loyalty_list": [],
                "loyalty_list": [],
                "al_android_url": "3",
                "al_ios_url": "#",
                "og_title": "Auth Test",
                "name_en": "Auth Test",
                "og_description": "Auth Test",
                "subtitle_en": "Auth Test",
                "is_giftable": true,
                "active_at": "2022-03-31T09:28:59.229Z"
            }
        }).then(response => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(201);
        })
    })

    // Test API call for Inventory Module
    it('Check API Call for Inventory', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.perxtech.io/v4/dash/inventories?page=1&order=desc&sort_by=created_at&size=25',
            headers: {
                'Authorization': 'Bearer ' + access_token
            }
        }).then(response => {
            cy.log(JSON.stringify(response));
            cy.log('Status Code for Inventory : ' + JSON.stringify(response.status))
        }).should(response => {
            let responeValue = JSON.stringify(response.status)
            expect(responeValue).to.be.equal('200')
        })

    })

    // Test API call for Campaigns Module
    it('Check API Call for Campaigns', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.perxtech.io/v4/dash/campaigns?size=25',
            headers: {
                'Authorization': 'Bearer ' + access_token
            }
        }).then(response => {
            cy.log(JSON.stringify(response));
        }).should(response => {
            let responeValue = JSON.stringify(response.status)
            expect(responeValue).to.be.equal('200')
        })

    })

    // Test API call for Audience Module
    it('Check API Call for Audience ', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.perxtech.io/v4/dash/v4_audiences?page=1&size=10&sort_by=created_at&order=desc',
            headers: {
                'Authorization': 'Bearer ' + access_token
            }
        }).then(response => {
            cy.log(JSON.stringify(response));
        }).should(response => {
            let responeValue = JSON.stringify(response.status)
            expect(responeValue).to.be.equal('200')
        })

    })

    // Test API call for Merchants Module
    it('Check API Call for Merchants ', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.perxtech.io/v4/dash/merchants?page=1&size=25',
            headers: {
                'Authorization': 'Bearer ' + access_token
            }
        }).then(response => {
            cy.log(JSON.stringify(response));
            cy.log('Test Status : ' + JSON.stringify(response.status))

        }).should(response => {
            let responeValue = JSON.stringify(response.status)
            expect(responeValue).to.be.equal('200')
        })

    })
})
