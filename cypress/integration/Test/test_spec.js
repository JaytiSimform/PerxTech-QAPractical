/// <reference types="cypress" /> 

import { visitSite } from "../page-Object/test-page-object"

/// Visit Site
const vs = new visitSite()
describe('Visit Site', () => {
    it('Visit site', () => {
        cy.wait(500)
        vs.vist()
    })
})

/// Log-In in site 
describe('Login-Site', () => {
    it('Login Successfully', () => {
        vs.logIn()
    })
})


/// Navigate to Bulk actions from Dashboard
describe('Naviagte to Bulk Actions', () => {
    it('Navigation to Bulk-actions Successfully', () => {
        vs.navigateBulkActions()
    })
    
})


/// Text File Uploading 
describe('Text File Upload', () => {
    it('Text Upload done', () =>{
        vs.uploadText()
        vs.statusReflectofFileUploaded()
        
    })
})

/// CSV File Uploading 
describe('CSV File Upload', () => {
    it('CSV Upload done', () =>{
        vs.vist()
        vs.logIn()
        vs.navigateBulkActions()
        vs.uploadCSV()
    })
})

/// xlxs File Uploading 
describe('XLXS File Upload', () => {
    it('XLXS Upload done', () =>{
        vs.vist()
        vs.logIn()
        vs.navigateBulkActions()
        vs.uploadXlsx()
    })
})

/// Status of File (Uploaded File is reflected or not)
describe('Status of File', () => {
    it('Uploaded File has been reflected in Table', () =>{
        vs.statusReflectofFileUploaded()
    })
})

/// Uploading Multiple File at a time 
describe('Multiple File Upload', () => {
    it('Multiple Selection Upload done', () =>{
        vs.vist()
        vs.logIn()
        vs.navigateBulkActions()
        vs.multipleUploadSelection()
    })
})

/// Check the extensions of file that are supoorted to Upload
describe('Extension of File', () => {
    it('Upload supports extension of file to be Uploaded', () =>{
        vs.vist()
        vs.logIn()
        vs.navigateBulkActions()
        vs.extensionFile()
    })
})
