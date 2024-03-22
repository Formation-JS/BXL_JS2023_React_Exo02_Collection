const Price = ({price}) => {

    const priceFormatted = price.toLocaleString('fr-be', {
        style: 'currency',
        currency: 'EUR'
    });

    return (
        <span>{priceFormatted}</span>
    );
};

export default Price;