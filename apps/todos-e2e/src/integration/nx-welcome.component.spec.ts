describe('todos', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('myorg-nx-welcome').should('exist');
  });
});