export class visitSite{
    vist(){
        cy.wait(500)
        cy.visit('https://dashboard.perxtech.io/dashboard/signin')
    }

    logIn(){
    cy.wait(500)
    cy.get('#email').click()
    cy.get('#email').type('admin@dashboard.com')
    cy.get('#password')
    cy.get('#password').type('admin1234')
    }

    navigateBulkActions(){
        cy.get('.ant-btn', {timeout: 6000}).click()
        cy.get('[data-key="bulk_actions"] > a', {timeout: 6000}).click()
    }

    uploadText(){
        const fileUpload = 'sample3.txt'
        cy.get('.ant-btn').click()
        cy.wait(500)
        cy.get('input[type="file').attachFile(fileUpload)
        cy.wait(500)
        cy.get('.ant-select-selection__rendered').click()
        cy.get('.ant-select-dropdown-menu > :nth-child(1)').click()
        cy.wait(500)
        cy.get('.ant-modal-footer > .ant-btn-primary',).click()
        cy.get('.ant-upload-list-item-name').contains('sample3.txt')
        cy.reload()
    }

    uploadCSV(){
        const fileUpload = 'sample_issue_vouchers.csv'
        cy.get('.ant-btn').click({multiple: true})
        cy.wait(500)
        cy.get('input[type="file').attachFile(fileUpload)
        cy.get('.ant-upload-drag-icon > .anticon > svg').click({multiple: true})
        cy.wait(500)
        cy.get('.ant-select-selection__rendered').click()
        cy.get('.ant-select-dropdown-menu > :nth-child(3)').click()
        cy.wait(500)
        cy.get('.ant-modal-footer > .ant-btn-primary',).click({multiple: true})
        cy.get('.ant-upload-list-item-name').contains('sample_issue_vouchers.csv')
    }

    uploadXlsx(){
            const fileUpload = 'file_example_XLSX_10.xlsx'
            cy.get('.ant-btn').click()
            cy.wait(500)
            cy.get('input[type="file').attachFile(fileUpload)
            cy.wait(500)
            cy.get('.ant-select-selection__rendered').click()
            cy.get('.ant-select-dropdown-menu > :nth-child(4)').click()
            cy.wait(500)
            cy.get('.ant-modal-footer > .ant-btn-primary',).click()
            cy.get('.ant-upload-list-item-name').contains('file_example_XLSX_10.xlsx')
    }

    multipleUploadSelection(){
            const fileUpload = 'sample3.txt'
            const fileUpload1 = 'sample_issue_vouchers.csv'
            const fileUpload2 = 'file_example_XLSX_10.xlsx'
            cy.get('.ant-btn').click()
            cy.wait(500)
            cy.get('input[type="file').attachFile(fileUpload)
            cy.wait(500)
    
            cy.get('.ant-upload-drag-icon > .anticon > svg').click({multiple: true})
            cy.wait(1000)
            cy.get('input[type="file').attachFile(fileUpload1)
            cy.wait(1000)
    
            cy.get('.ant-upload-drag-icon > .anticon > svg').click({multiple: true})
            cy.wait(1000)
            cy.get('input[type="file').attachFile(fileUpload2)
            cy.wait(1000)

            cy.get('.ant-select-selection__rendered').click({multiple: true})
            cy.get('.ant-select-dropdown-menu > :nth-child(3)').click({multiple: true})
            cy.wait(500)
            cy.get('.ant-modal-footer > .ant-btn-primary',).click()
    }

    extensionFile(){
        const fileUpload = 'Image.png'
        cy.get('.ant-btn').click()
        cy.wait(500)
        cy.get('input[type="file').attachFile(fileUpload)
        cy.wait(500)
        cy.get('.ant-select-selection__rendered').click()
        cy.get('.ant-select-dropdown-menu > :nth-child(1)').click()
        cy.wait(500)
        cy.get('.ant-modal-footer > .ant-btn-primary',).click()
        cy.log('Only csv, txt, & xlsx Files are Supported')
        /// cy.log((cy.get('.ant-message-custom-content > span')))
        cy.get('.ant-upload-list-item-name').contains('Image.png')
        cy.get('.ant-modal-close-x').click()
        
    }

    statusReflectofFileUploaded(){

        cy.wait(3000)
        cy.contains('Processing')
        cy.log('File Uploading is beem successfully Completed !')
    }
}