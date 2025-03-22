import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './ImageDropzone.module.css';

interface ImageDropzoneProps {
  onFileSelect: (file: File) => void;
  maxSize?: number; // in bytes
  acceptedFileTypes?: string;
}

const ImageDropzone: React.FC<ImageDropzoneProps> = ({
  onFileSelect,
  maxSize = 10485760, // 10MB default
  acceptedFileTypes = 'image/*',
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setError(null);
      
      if (acceptedFiles.length === 0) {
        return;
      }

      const file = acceptedFiles[0]; // Take only the first file
      
      // Check file size
      if (file.size > maxSize) {
        setError(`File is too large. Maximum size is ${(maxSize / (1024 * 1024)).toFixed(1)}MB.`);
        return;
      }

      // Create preview
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      
      // Send file to parent component
      onFileSelect(file);

      // Clean up preview URL on unmount
      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    },
    [maxSize, onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      [acceptedFileTypes]: [],
    },
    maxSize,
    multiple: false,
  });

  const removeImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null);
    setError(null);
  };

  return (
    <div className={styles.container}>
      <div 
        {...getRootProps()} 
        className={`${styles.dropzone} ${isDragActive ? styles.active : ''} ${isDragReject ? styles.reject : ''} ${error ? styles.error : ''}`}
      >
        <input {...getInputProps()} />
        
        {preview ? (
          <div className={styles.previewContainer}>
            <div className={styles.previewWrapper}>
              <img src={preview} alt="Preview" className={styles.preview} />
              <button type="button" onClick={removeImage} className={styles.removeButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.placeholder}>
            {isDragActive ? (
              <div className={styles.dropMessage}>
                <span className={styles.uploadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
                  </svg>
                </span>
                <p>Drop the image here</p>
              </div>
            ) : (
              <div className={styles.uploadMessage}>
                <span className={styles.uploadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                </span>
                <p>Drag & drop a satellite image here, or click to select</p>
                <span className={styles.fileTypesHint}>
                  Supports: JPEG, PNG, GIF (max {(maxSize / (1024 * 1024)).toFixed(0)}MB)
                </span>
              </div>
            )}
          </div>
        )}
      </div>
      
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default ImageDropzone; 