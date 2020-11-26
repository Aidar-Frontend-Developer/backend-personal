// Core
import { v4 as uuidv4 } from 'uuid';

export const addHash = (schema, options = {}) => {
    const { index } = options;

    schema.add({
        hash: {
            type:   String,
            unique: true,
        },
    });

    schema.pre('save', function (next) {
        this.hash = uuidv4();

        next();
    });

    if (index) {
        schema.path('hash').index(true);
    }
};
