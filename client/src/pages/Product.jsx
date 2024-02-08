import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
 import { CREATE_PRODUCT } from '../utils/mutations';

const Matchup = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const productList = data?.getAllProduct || [];

  console.log("PRODUCT LIST: ", productList)

  const [productName, setProductName] = useState("");
  let navigate = useNavigate();

   const [createProduct, { error }] = useMutation(CREATE_PRODUCT);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductName({ ...productName, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createMatchup({
        variables: { ...formData },
      });

      navigate(`/matchup/${data.createMatchup._id}`);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      tech1: 'JavaScript',
      tech2: 'JavaScript',
    });
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Let's create a matchup!</h1>
      </div>
      <div className="card-body m-5">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <form >
            <label>Tech 1: </label>
            <select name="product">
              {productList.map((product) => {
                return (
                  <option key={product._id} value={product.name}>
                    {product.name}
                  </option>
                );
              })}
            </select>
            <label>Tech 2: </label>
            {/* <select name="tech2" onChange={handleInputChange}>
              {techList.map((tech) => {
                return (
                  <option key={tech._id} value={tech.name}>
                    {tech.name}
                  </option>
                );
              })}
            </select> */}
            <button className="btn btn-danger" type="submit">
              Create Matchup!
            </button>
          </form>
        )}
      </div>
      {/* {error && <div>Something went wrong...</div>} */}
    </div>
  );
};

export default Matchup;
