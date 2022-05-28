import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useItems from '../../Hooks/useItems';

const ManageTables = (params) => {
    const { _id, name, description, price, quantity, supplierName } = params.product;
    const [items, setItems] = useItems();
    const navigate = useNavigate();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://thawing-sands-12388.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                        window.location.reload();
                    }
                })
        }
    };
    const handleUpdate = (id) => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div>
            <Table striped bordered hover variant="Responsive">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Supplier Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{description.slice(0, 150) + '...'}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                        <td>{supplierName}</td>
                        <td><Button className='btn btn-danger' onClick={() => handleDelete(_id)}>Delete</Button>
                            <Button className='btn btn-success' onClick={() => handleUpdate(_id)}>Update</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};
export default ManageTables;