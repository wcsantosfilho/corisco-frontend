import Header from './Header'
import List from './List'
import GenericCard from './GenericCard';
import Footer from './Footer';
import Form from './Form';

function MainLayout() {
    return (
        <div className="grid-container">
            <div className="page-header">
                <Header applicationName="corisco" />
            </div>
            <div className="status-card">
                <GenericCard cardTitle="Últ. Concurso" cardContent={2241} />
                <Form />
            </div>
            <div className="page-main">
                <div className="bet-table">
                    <List />
                </div>
            </div>
            <div className="page-footer">
                <Footer text="W&A Soluções Tecnológicas Ltda. Todos os direitos reservados." />
            </div>
        </div>
    )
}

export default MainLayout;