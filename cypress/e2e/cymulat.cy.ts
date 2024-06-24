describe('template spec', () => {
  it('Should visit the login page', () => {
    cy.visit('/')
    cy.title().should('include', 'Cymulate')
  })

  it('Should login to the system', function () {
    const username = Cypress.env('username')
    const password = Cypress.env('password')
    cy.visit('/')
    cy.wait(10000)
    cy.get('#email').type(username)
    cy.get('#password').type(password)
    cy.get('[type="submit"]').click()
    cy.url().should('contain', 'cym')

  })

  it('Should visit activity log page', function () {
    cy.wait(5000)
    cy.get('[data-testid="app-menu-avatar-button"]').click()
    cy.wait(1000)
    cy.get('[data-testid="link-button-Activity log"]', { withinSubject: null }).should('exist').click();
  })

  it('Should apply the filters', function () {
    cy.wait(3000)
    cy.get('.MuiBadge-root > #icon_', { withinSubject: null }).should('exist').click()
    cy.wait(1000)
    cy.get(':nth-child(6) > .FiltersListItem__FiltersListItemHeader-sc-743cqh-1').click()
    cy.wait(1000)
    cy.get('[test-id="advanced-scenarios"]').click()
    cy.get('[test-id="apply-filters"] > .MuiButton-label').click()
  })

  it('Should print the first 3 records', function () {
    cy.get('.TableInner__StyledTableInner-sc-vzmrh1-0')
      .find('div[data-row-id]')
      .each(($row, index) => {
        if (index < 3) {
          const assessmentIdSection: any = $row.find('div[test-data-id="assessmentID"]');
          cy.log("assessmentIdSection", assessmentIdSection)

          if (assessmentIdSection.length > 0) {
            const assessmentIdElement = assessmentIdSection.find('[test-id="assesementId"]');
            const assessmentId = assessmentIdElement.text().trim();

            cy.log(`Row ${index + 1} assessmentId: ${assessmentId}`);
          } else {
            cy.log(`Row ${index + 1} - Assessment ID section not found`);
          }
        }
      });



  })

})