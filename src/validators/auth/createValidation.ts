import { body } from 'express-validator';

export const createValidation = [
  body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Email is invalid'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
];
