import express from 'express';
import mongoose from 'mongoose';

import PostStructure from '../models/postStructure';

const getPosts = async (req, res) => {
    try {
        const postMessages = await PostStructure.find();
        console.log(postMessages);

        res.status(200).json(postMessages);

    } catch (error){
        res.status(404).json({message: error.message});
    }
};

const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostStructure(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
};

const updatePost = async (req, res) => {
    const post = req.body;

    const newPost = new PostStructure(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
};

export {getPosts, createPost, updatePost};