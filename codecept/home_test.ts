Feature('home');

Scenario('test something',  ({ I }) => {
    I.amOnPage('/');
    I.see('Remix');
    I.see('Prova antd', 'button.ant-btn-primary');
});
