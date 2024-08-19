import React from 'react';
import PropTypes from 'prop-types';

const Lehjah = ({ business_id, public_key, token, environment = 'sandbox', width = '100%', height = '100%' }) => {
    const baseUrl = environment === 'sandbox' 
        ? 'https://sandbox-widget.lehjah.com' 
        : 'https://widget.lehjah.com';

    const iframeSrc = `${baseUrl}/v1/app/${public_key}?business_id=${business_id}&token=${token}`;

    return (
        <iframe
            src={iframeSrc}
            width={width}
            height={height}
            style={{ border: 'none' }}
            title="Lehjah"
        />
    );
};

Lehjah.propTypes = {
    business_id: PropTypes.string.isRequired,
    public_key: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    environment: PropTypes.oneOf(['sandbox', 'production']),
    width: PropTypes.string,
    height: PropTypes.string
};

export default Lehjah;
