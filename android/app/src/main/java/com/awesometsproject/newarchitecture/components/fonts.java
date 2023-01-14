package com.awesometsproject.newarchitecture.components;

import android.content.Context;
import android.graphics.Typeface;
import androidx.appcompat.widget.AppCompatTextView;

import android.util.AttributeSet;

public class fonts extends AppCompatTextView {

    public fonts(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
        init();
    }

    public fonts(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public fonts(Context context) {
        super(context);
        init();
    }

    public void init() {
        Typeface tf = Typeface.createFromAsset(getContext().getAssets(), "fonts/Fredoka-SemiBold.ttf");
        setTypeface(tf ,Typeface.NORMAL);

    }
}