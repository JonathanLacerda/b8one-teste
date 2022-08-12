export const apiProducts = async () => {

    const products = [{
        attribute: {
            sku: 'b8one-18201',
            name: `Monitor LED 27'' Gamer Meio Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50`,
            imageName: 'image.png',
            id: 15654,
            url: '#'
        },
        prices: {
            bestPrice: 2599.20,
            listPrice: 2813.99,
            installment: {
                max: 10,
                value: 259.00
            }
        }
    },
    {
        attribute: {
            sku: 'b8one-18201',
            name: `Monitor LED 27'' Gamer Semi Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50`,
            imageName: 'image.png',
            id: 15655,
            url: '#'
        },
        prices: {
            bestPrice: 1990.20,
            listPrice: 2513.99,
            installment: {
                max: 10,
                value: 199.00
            }
        }
    },
    {
        attribute: {
            sku: 'b8one-18201',
            name: `Monitor LED 27'' Gamer Bem Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50`,
            imageName: 'image.png',
            id: 15656,
            url: '#'
        },
        prices: {
            bestPrice: 1799.20,
            listPrice: 2813.99,
            installment: {
                max: 8,
                value: 224.90
            }
        }
    },
    {
        attribute: {
            sku: 'b8one-18201',
            name: `Monitor LED 27'' Gamer Pouco Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50`,
            imageName: 'image.png',
            id: 15657,
            url: '#'
        },
        prices: {
            bestPrice: 2000.00,
            listPrice: 2813.99,
            installment: {
                max: 10,
                value: 200.00
            }
        }
    }];

    return new Promise((resolve) => {
        resolve(products);
    });
};
