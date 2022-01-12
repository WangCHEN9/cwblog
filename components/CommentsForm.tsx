import React, { useState, useEffect, useRef } from 'react';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commeentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  return (
    <div className="bg-white shadow-lg roudned-lg p-8 pb-12 mb-8">
      <h1>CommentForm</h1>
    </div>
  );
};

export default CommentsForm;
