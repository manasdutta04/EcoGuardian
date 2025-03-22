import React, { useState, useRef, useCallback } from 'react';
import styles from './FileUploader.module.css';

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
  acceptedFileTypes?: string;
  maxFileSizeMB?: number;
  label?: string;
  multiple?: boolean;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  onFileSelect,
  acceptedFileTypes = 'image/*',
  maxFileSizeMB = 5,
  label = 'Upload a file',
  multiple = false,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current++;
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setIsDragging(false);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const validateFile = (file: File): boolean => {
    // Check file size
    if (file.size > maxFileSizeMB * 1024 * 1024) {
      setError(`File size exceeds ${maxFileSizeMB}MB limit. Please select a smaller file.`);
      return false;
    }

    // Check file type if specific types are required
    if (acceptedFileTypes !== '*') {
      const fileType = file.type;
      const acceptedTypesArray = acceptedFileTypes.split(',');
      
      // If file type doesn't match any of the accepted types
      if (!acceptedTypesArray.some(type => {
        if (type.endsWith('/*')) {
          // Handle wildcards like 'image/*'
          const typeCategory = type.split('/')[0];
          return fileType.startsWith(`${typeCategory}/`);
        }
        return type === fileType;
      })) {
        setError(`Invalid file type. Accepted types: ${acceptedFileTypes.replace(/\*/g, 'all')}`);
        return false;
      }
    }

    setError(null);
    return true;
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    dragCounter.current = 0;

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    if (validateFile(file)) {
      // If it's an image, create a preview
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPreview(null);
      }
      
      onFileSelect(file);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemovePreview = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const renderPreview = () => {
    if (!preview) return null;
    
    return (
      <div className={styles.previewContainer}>
        <img src={preview} alt="Preview" className={styles.previewImage} />
        <button 
          type="button"
          onClick={handleRemovePreview}
          className={styles.removePreviewButton}
          aria-label="Remove image preview"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.removeIcon}>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div className={styles.fileUploaderContainer}>
      <div
        className={`${styles.dropZone} ${isDragging ? styles.dropZoneActive : ''}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={triggerFileInput}
        tabIndex={0}
        role="button"
        aria-label={`Drop zone for ${label}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            triggerFileInput();
          }
        }}
      >
        <div className={styles.dropZoneContent}>
          {preview ? (
            renderPreview()
          ) : (
            <svg
              className={styles.uploadIcon}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          <div className={styles.uploadTextContainer}>
            <label htmlFor="file-upload" className={styles.uploadButton} tabIndex={-1}>
              <span>{label}</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                accept={acceptedFileTypes}
                onChange={handleFileInput}
                ref={fileInputRef}
                multiple={multiple}
                aria-label={label}
              />
            </label>
            <p>or drag and drop</p>
          </div>
          <p className={styles.fileTypeText}>
            {acceptedFileTypes.replace('/*', ' files')} up to {maxFileSizeMB}MB
          </p>
          {error && (
            <p className={styles.errorText} role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader; 