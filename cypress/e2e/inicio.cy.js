describe('Página inicial', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('Deve renderizar corretamente o texto da seção de vantagens', () => {
    cy.getByData('titulo-principal').contains(
      'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    );
    cy.get('h2').contains('Vantagens do nosso banco:');
  });
});
