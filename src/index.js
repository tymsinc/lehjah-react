import React from 'react';
import PropTypes from 'prop-types';

const Lehjah = ({ business_id, public_key, token, environment = 'sandbox', mode = 'full', page = '', variable1 = '', variable2 = '', variable3 = '', variable4 = '', variable5 = '', width = '100%', height = '100%' }) => {
    const baseUrl = environment === 'sandbox' 
        ? 'https://sandbox-widget.lehjah.com' 
        : 'https://widget.lehjah.com';

    const iframeSrc = `${baseUrl}/v1/app/${public_key}?business_id=${business_id}&token=${token}&mode=${mode}&page=${page}&variable1=${variable1}&variable2=${variable2}&variable3=${variable3}&variable4=${variable4}&variable5=${variable5}`;

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
    mode: PropTypes.oneOf(['full', 'page']),
    page: PropTypes.string,
    variable1: PropTypes.any,
    variable2: PropTypes.any,
    variable3: PropTypes.any,
    variable4: PropTypes.any,
    variable5: PropTypes.any,
    width: PropTypes.string,
    height: PropTypes.string
};

export default Lehjah;
